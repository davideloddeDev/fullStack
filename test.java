package com.example.mediarecorder;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.pm.PackageManager;
import android.media.MediaRecorder;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.util.Log;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import java.io.File;
import java.io.IOException;

@RequiresApi(api = Build.VERSION_CODES.R)
public class MainActivity extends AppCompatActivity {

    private MediaRecorder mediaRecorder;
    private TextView textLight, textRec;
    private ImageButton btnLight, btnRec;
    private boolean btnRecState = true;

    private File folderPath;
    private String fileName = "/audio001.mp3";
    private String outputPath;

    private static final int REQUEST_PERMISSION_CODE = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textLight = findViewById(R.id.textLight);
        textRec = findViewById(R.id.textRec);

        btnLight = findViewById(R.id.btnLight);
        btnRec = findViewById(R.id.btnRec);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            folderPath = new File(Environment.getExternalStoragePublicDirectory(
                    Environment.DIRECTORY_RECORDINGS).toURI());
            outputPath = folderPath + fileName;
        }

        btnLight.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                textLight.setText(btnLightState ? "Spegni torcia" : "Accendi torcia");
                // Aggiungi la logica per cambiare lo stato della torcia
                btnLightState = !btnLightState;
            }
        });

        btnRec.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (btnRecState) {
                    startRecording();
                    textRec.setText("Ferma registrazione");
                    btnRecState = false;
                } else {
                    stopRecording();
                    btnRecState = true;
                    textRec.setText("Avvia registrazione");
                }
            }
        });

        requestPermissions();
    }

    private void requestPermissions() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) !=
                PackageManager.PERMISSION_GRANTED &&
                ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) !=
                        PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.CAMERA, Manifest.permission.RECORD_AUDIO},
                    REQUEST_PERMISSION_CODE);
        } else {
            Log.d("PERMISSIONS", "Permissions granted");
            Toast.makeText(this, "Permissions OK", Toast.LENGTH_SHORT).show();
        }
    }

    private void startRecording() {
        Toast.makeText(this, "Dentro Start recording", Toast.LENGTH_SHORT).show();
        Toast.makeText(this, "Path: " + outputPath, Toast.LENGTH_SHORT).show();
        Log.i("PATH", outputPath);

        try {
            mediaRecorder = new MediaRecorder();
            mediaRecorder.setAudioSource(MediaRecorder.AudioSource.MIC);
            mediaRecorder.setOutputFormat(MediaRecorder.OutputFormat.MPEG_4);
            mediaRecorder.setAudioEncoder(MediaRecorder.AudioEncoder.AMR_NB);
            mediaRecorder.setOutputFile(outputPath);
            mediaRecorder.prepare();
            mediaRecorder.start();
        } catch (IOException e) {
            e.printStackTrace();
            Log.e("ERROR MEDIARECORDER", e.getMessage());
            Toast.makeText(this, "Error starting recording", Toast.LENGTH_SHORT).show();
        }
    }

    private void stopRecording() {
        Toast.makeText(this, "Dentro stopRecording", Toast.LENGTH_SHORT).show();
        Log.e("MEDIARECORDER", "Stopping recording");

        try {
            if (mediaRecorder != null) {
                mediaRecorder.stop();
                mediaRecorder.reset();
                mediaRecorder.release();
            }
        } catch (Exception e) {
            e.printStackTrace();
            Log.e("ERROR MEDIARECORDER", e.getMessage());
        } finally {
            mediaRecorder = null;
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (btnRecState) {
            stopRecording();
        }
        if (mediaRecorder != null) {
            mediaRecorder.release();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == REQUEST_PERMISSION_CODE) {
            boolean allPermissionsGranted = true;
            for (int result : grantResults) {
                if (result != PackageManager.PERMISSION_GRANTED) {
                    allPermissionsGranted = false;
                    break;
                }
            }

            if (allPermissionsGranted) {
                Log.d("PERMISSIONS", "Permissions granted after request");
                Toast.makeText(this, "Permissions OK", Toast.LENGTH_SHORT).show();
            } else {
                Log.d("PERMISSIONS", "Some permissions not granted after request");
                Toast.makeText(this, "Some permissions not granted", Toast.LENGTH_SHORT).show();
            }
        }
    }
}
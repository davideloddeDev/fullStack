Dato il form 
<form action="#">
	<div>
		<label for="form-email">Email</label>
		<input type="email" id="form-email" name="email"/>
		<label for="form-pass">Password</label>
		<input type="password" id="form-pass" name="pass"/>
	</div>
	<div>
		<label for="form-name">Nome e cognome</label>
		<input type="text" id="form-name" name="name"/>
		<label for="form-dob">Data di nascita</label>
		<input type="date" id="form-dob" name="dob"/>
		<label for="form-tel">Telefono</label>
		<input type="tel" id="form-tel" name="tel"/>
	</div>
	<div>
		<label for="form-plan">Piano di abbonamento</label>
		<select id="form-plan" name="plan">
			<option value="0">Free</option>
			<optgroup label="Mensili">
				<option value="199">1.99€/mese</option>
				<option value="599">5.99€/mese</option>
				<option value="1199">11.99€/mese</option>
			</optgroup>
		</select>
		<label for="form-pro">Piano PRO</label>
		<input id="form-pro" name="pro" type="checkbox"/>
	</div>
	<div>
		<label for="form-cc">Numero Carta</label>
		<input id="form-cc" name="cc" type="text"/>
		<label for="form-cvc">CVC</label>
		<input id="form-cvc" name="cvc" type="text"/>
		<label for="form-exp">Scadenza</label>
		<input id="form-exp" name="exp" type="date"/>
		<label for="form-address">Indirizzo di fatturazione</label>
		<input type="text" id="form-address" name="address"/>
	</div>

	<button type="submit">Registrati</button>
</form>
validare i campi tale che:
 - Tutti i campi siano obbligatori.
 - I campi relativi a numero carta di credito e CVC devono avere una prima validazione sulla lunghezza e la correttezza dei valori.

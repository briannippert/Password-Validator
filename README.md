<h1>Password-Validator</h1>
<h2>JavaScript Library for password field validation</h2>

<b>Usage-</b>
<ol>
	<li>Add PasswordValidator to your HTML Document under JQuery and BootsrtrapJS.</li>
<li>Give all password fields a unique ID that ends with a number "password1"</li>
<li>Add the class "validate" to the password input.</li>
</ol>

<b> Version 2 </b>
<ol>
	<li>Add PasswordValidatorv2.js to your HTML Document under JQuery and BootsrtrapJS.</li>
	<li>use PasswordValidator.setup(PasswordFieldID,[VerifyFieldId]), to setup password validator, VerifyFieldId is optional</li>
</ol>

Following fields are configurable now :-</br>
    PasswordValidator.minSize = 5;  // Default  </br>
    PasswordValidator.maxSize = 15;  // Default </br>
    PasswordValidator.lengthConfigured = true;  // Default </br>
    PasswordValidator.uppercaseConfigured = true;  // Default </br>
    PasswordValidator.digitConfigured = true;  // Default </br>
    PasswordValidator.specialConfigured = true;  // Default </br>
    PasswordValidator.prohibitedConfigured = true;  // Default </br>
    PasswordValidator.specialCharacters = ['_', '#', '%', '*', '@'];  // Default </br>
    PasswordValidator.prohibitedCharacters = ['$', '&', '=', '!'];  // Default </br>


<b>Change Log:</b>	
<p>
Version 1.0- Initial release<br/>
Version 1.1 - Cleaned up code and added comments<br/>
Version 1.2 - Added version comments<br/>
Version 1.3 - Added password matching feature </br>
Version 1.4 - Added version2 </br>
</p>

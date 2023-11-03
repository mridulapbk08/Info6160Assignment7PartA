    $(document).ready(function() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
        const specialCharacterRegex = /[!@#$%^&*()_+={};'":<>,.?~`/\\[\]\\|]/;
        
        function validateEmail(email) {
            return emailRegex.test(email);
        }

        function showError(id, message) {
            $(id).text(message).show();
        }

        function hideError(id) {
            $(id).text('').hide();
        }

        function validateForm() {
            const email = $('#email').val();
            const username = $('#username').val();
            const password = $('#password').val();
            const confirmPassword = $('#confirm-password').val();

            let valid = true;

            if (email === '') {
                showError('#email-error', 'Email is required');
                valid = false;
            } else if (!validateEmail(email)) {
                showError('#email-error', 'Invalid email format');
                valid = false;
            } else {
                hideError('#email-error');
            }

            if (username === '') {
                showError('#username-error', 'User Name is required');
                valid = false;
            } else if (username.length < 3 || username.length > 20) {
                showError('#username-error', 'User Name must be between 3 and 20 characters');
                valid = false;
            } else if (specialCharacterRegex.test(username)) {
                showError('#username-error', 'User Name cannot contain special characters');
                valid = false;
            } else {
                hideError('#username-error');
            }

            if (password === '') {
                showError('#password-error', 'Password is required');
                valid = false;
            } else if (password.length < 8 || password.length > 20) {
                showError('#password-error', 'Password must be between 8 and 20 characters');
                valid = false;
            } else {
                hideError('#password-error');
            }

            if (confirmPassword === '') {
                showError('#confirm-password-error', 'Confirm Password is required');
                valid = false;
            } else if (confirmPassword !== password) {
                showError('#confirm-password-error', 'Passwords do not match');
                valid = false;
            } else {
                hideError('#confirm-password-error');
            }

            return valid;
        }

        $('#email, #username, #password, #confirm-password').on('input', function() {
            const valid = validateForm();
            $('#login-btn').prop('disabled', !valid);
        });

        $('#login-btn').click(function() {
            if (validateForm()) {
                const username = $('#username').val();
                window.location.href = 'calculator.html?username=' + username;
            }
        });
    });

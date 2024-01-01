const SYMBOLS = '!@#$%^&*()';
const NUMBERS = '0123456789';
const LOWERCASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

interface passwordGeneratorOptions {
    length?: number;
    symbols?: boolean;
    lowercase?: boolean;
    uppercase?: boolean;
}

/**
 * Function for generating a random password
 *
 * @param {number} length
 */
export function generatePassword(options: passwordGeneratorOptions): string {
    const password = '';

    // for (let i = 0; i < parseInt(passwordLength); i++) {
    //     newPassword += charset.charAt(
    //         Math.floor(Math.random() * charset.length),
    //     );
    // }

    return password;
}

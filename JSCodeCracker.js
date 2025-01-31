const readline = require('readline');

// Функція для обфускації символів
function obfuscate(char) {
    return String.fromCharCode(char.charCodeAt(0) ^ 0x5F);
}

// Функція для деобфускації символів
function deobfuscate(char) {
    return String.fromCharCode(char.charCodeAt(0) ^ 0x5F);
}

// Функція для отримання правильного пароля
function getCorrectPassword() {
    const originalPassword = "SecurePass123";
    let obfuscated = '';
    for (let char of originalPassword) {
        obfuscated += obfuscate(char);
    }
    return obfuscated;
}

// Функція для перевірки пароля
function checkPassword(input) {
    const obfuscatedPassword = getCorrectPassword();
    let deobfuscated = '';
    for (let char of obfuscatedPassword) {
        deobfuscated += deobfuscate(char);
    }
    return input === deobfuscated;
}

// Основна функція
function main() {
    console.log("Вітаємо у JSCodeCracker!");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Будь ласка, введіть пароль активації: ", (answer) => {
        // Невелика затримка для ускладнення аналізу
        setTimeout(() => {
            if (checkPassword(answer)) {
                console.log("Вітаємо! Ви розбили JSCodeCracker.");
            } else {
                console.log("Пароль невірний. Спробуйте ще раз.");
            }
            rl.close();
        }, 500);
    });
}

main();

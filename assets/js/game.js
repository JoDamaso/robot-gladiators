var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// You can also log multiple values at once like this
// console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
            }
        }
    
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');
    
            // award player money for winning
            playerMoney = playerMoney + 20;
    
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
    
        // remove players's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );
    
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    }
};

var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for(var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = Math.floor(Math.random() * 21) + 40;
        var randomNumber = function(min, max) {
            var value = Math.floor(Math.random() * 21) + 40;
            return value;
        };
        // fight(pickedEnemyName);
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Galdiators! Round " + ( i + 1 ));
            var pickedEnemyName = enemyNames[i];
            // enemyHealth = randomNumber (40, 60);
            enemyHealth = randomNumber ();
            // debugger;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeconfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeconfirm){
                shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        };
    };
endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if player is alivem player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart confirm
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    };
};

var shop = function() {
    //ask player what they want to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store. Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            //increase hp and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            } else {
                window.alert("You do not have enough money!");
            }
            break;
                case "UPGRADE":
                case "upgrade":
                    if (playerMoney >= 7) {
                    window.alert("Upgrading player's attack by 6 for 7 dollars.");
                    //increase attack and decrease money
                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                    } else {
                        window.alert("You do not have enough money!");
                    }
                    break;
                        case "LEAVE":
                        case "leave":
                            window.alert("Leaving store.");
                            break;
                                default:
                                    window.alert("You did not pick a valid option. Try again.");
                                    //call shop to force player to pick again
                                    shop();
                                    break;
    }
};
// var randomNumber = function() {
//     var value = Math.floor(Math.random() * 21) + 40;

//     return value;
//   };
startGame();
// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
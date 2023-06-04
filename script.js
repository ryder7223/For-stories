// Define an array of insults
        var insults = [
            "You have the charm of a soggy potato.",
            "Your IQ is lower than a snail's.",
            "Your fashion sense is a crime against humanity.",
            "I'd explain it to you, but I'm afraid you wouldn't understand.",
            "Your presence is about as welcome as a skunk in a perfume shop.",
            "If ignorance is bliss, you must be the happiest person alive.",
            "You have the wit of a teaspoon.",
            "Your face could curdle milk."
        ];

        // Generate a random insult
        function generateInsult() {
            var randomIndex = Math.floor(Math.random() * insults.length);
            var insult = insults[randomIndex];
            document.getElementById("insult-text").textContent = insult;
        }

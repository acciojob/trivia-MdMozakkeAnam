//your code here
 function checkAnswer() {
            const selected = document.querySelector('input[name="capital"]:checked');
            if (selected && selected.value === 'new-delhi') {
                alert('🎉 Correct! New Delhi is indeed the capital of India.');
            } else {
                alert('❌ Not quite! The correct answer is New Delhi.');
            }
        }

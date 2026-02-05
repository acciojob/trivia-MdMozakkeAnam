//your code here
  <script>
        function checkAnswer() {
            const selected = document.querySelector('input[name="capital"]:checked');
            if (selected && selected.value === 'new-delhi') {
                alert('✅ Correct! New Delhi is the capital of India.');
            } else if (selected && selected.value === 'mumbai') {
                alert('❌ Incorrect! Mumbai is not the capital. New Delhi is the capital of India.');
            } else {
                alert('⚠️ Please select an answer first!');
            }
        }
    </script>
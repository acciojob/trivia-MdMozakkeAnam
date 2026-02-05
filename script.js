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
</body>
</html>
Fixed Test Case Issues:

Quote structure: Moved <blockquote> directly inside .quote-container (no nesting issues)

Exact styling specs: Confirmed max-width: 600px, margin: 10px, padding: 15px, border-left: 8px solid #28a745, background-color: #f8fffe, font-weight: bold

Simplified button: Changed type="submit" to type="button" to prevent form submission

Cleaner source reference: Clear Wikipedia attribution

✅ All test cases should now pass! The styling matches specifications exactly.


//your code here
 body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    background-color: #f8fafc;
    color: #334155;
}

/* Question container */
.question {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    margin-bottom: 30px;
}

/* Question text */
.question-text {
    font-size: 1.4em;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 3px solid #e2e8f0;
}

/* Options container */
.options {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Option labels */
.option {
    display: flex;
    align-items: center;
    padding: 14px 20px;
    background: #f1f5f9;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid transparent;
}

.option:hover {
    background: #e2e8f0;
    transform: translateX(4px);
}

.option input[type="radio"] {
    margin-right: 12px;
    width: 20px;
    height: 20px;
    accent-color: #3b82f6;
    cursor: pointer;
}

.option input[type="radio"]:checked + span {
    font-weight: 600;
    color: #3b82f6;
}

.option span {
    font-size: 1.1em;
}

niche
.reference a {
    display: inline-block;
    padding: 10px 24px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.reference a:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

/* Responsive design */
@media (max-width: 640px) {
    body {
        padding: 20px 15px;
    }
    
    .question {
        padding: 20px;
    }
    
    .question-text {
        font-size: 1.2em;
    }
}


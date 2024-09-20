import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GenerateReport = ({ addReport }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReport = { title, content };
        addReport(newReport);
        navigate('/reports'); // Redirect to the Reports page after submission
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#1e272e',
            color: '#f1f2f6',
        },
        form: {
            backgroundColor: '#2f3640',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
            width: '90%',
            maxWidth: '600px',
            transition: 'box-shadow 0.3s ease',
        },
        formTitle: {
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#f1f2f6',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
        },
        input: {
            width: '100%',
            padding: '15px',
            margin: '15px 0',
            borderRadius: '8px',
            border: '2px solid #57606f',
            backgroundColor: '#2f3640',
            color: '#f1f2f6',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s ease, background-color 0.3s ease',
        },
        inputFocus: {
            borderColor: '#3498db',
        },
        textarea: {
            minHeight: '150px',
        },
        button: {
            width: '100%',
            padding: '15px 0',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#3742fa',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '20px',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
        },
        buttonHover: {
            backgroundColor: '#57606f',
            transform: 'scale(1.02)',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        },
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={styles.formTitle}>Create a New Report</h2>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="Report Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                    onBlur={(e) => e.target.style.borderColor = '#57606f'}
                    required
                />
                <textarea
                    style={{ ...styles.input, ...styles.textarea }}
                    placeholder="Report Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                    onBlur={(e) => e.target.style.borderColor = '#57606f'}
                    required
                />
                <div style={styles.buttonContainer}>
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseEnter={e => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseLeave={e => e.target.style.backgroundColor = styles.button.backgroundColor}
                        onMouseDown={e => e.target.style.transform = styles.buttonHover.transform}
                        onMouseUp={e => e.target.style.transform = 'scale(1)'}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GenerateReport;

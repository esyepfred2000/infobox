import React from "react";

interface InfoBoxProps {
    title: string;
    text: string;
    linkText: string;
    linkUrl: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, text, linkText, linkUrl }) => {
    return (
        <div style={{ 
            border: "1px solid #ccc", 
            padding: "16px", 
            borderRadius: "8px", 
            maxWidth: "400px", 
            margin: "auto",
            textAlign: "center"
        }}>
            <h2>{title}</h2>
            <p>{text}</p>
            <a 
                href={linkUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                    display: "inline-block", 
                    padding: "10px 20px", 
                    backgroundColor: "#007bff", 
                    color: "#fff", 
                    textDecoration: "none", 
                    borderRadius: "5px",
                    transition: "background-color 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
            >
                {linkText}
            </a>
        </div>
    );
};

export default InfoBox;
export {}; 
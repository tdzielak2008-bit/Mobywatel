// React Component for Document Management
import React, { useState, useEffect } from 'react';

function App() {
    const [documents, setDocuments] = useState([]);
    const [newDocument, setNewDocument] = useState('');

    useEffect(() => {
        // Fetch documents from API or local storage
        fetchDocuments();
    }, []);

    const fetchDocuments = () => {
        // Logic to fetch documents
        setDocuments(['Document 1', 'Document 2']); // Placeholder
    };

    const addDocument = () => {
        if (newDocument) {
            setDocuments([...documents, newDocument]);
            setNewDocument('');
        }
    };

    const editDocument = (index, updatedDocument) => {
        const updatedDocuments = [...documents];
        updatedDocuments[index] = updatedDocument;
        setDocuments(updatedDocuments);
    };

    return (
        <div>
            <h1>Document Management</h1>
            <input type="text" value={newDocument} onChange={(e) => setNewDocument(e.target.value)} />
            <button onClick={addDocument}>Add Document</button>
            <ul>
                {documents.map((doc, index) => (
                    <li key={index}>
                        {doc} <button onClick={() => editDocument(index, prompt('Edit Document:', doc))}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
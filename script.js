//Werka - participant registration, display, and management

const initialParticipants = [
    { id: 1, name: 'Werka', age: 32, email: 'werka@email.com', gender: 'Female' },
    { id: 2, name: 'Ana Maria Despoiu', age: 33, email: 'ana@email.com', gender: 'Female' },
];

let participants = [...initialParticipants];

let nextId = 3;

window.participants = participants;

function loadParticipants() {
    document.getElementById('participantsList').innerHTML = '<p>Loading participants...</p>';
    
    setTimeout(function() {
        renderParticipants();
        updateParticipantCount(); 
        document.getElementById('totalRaised').textContent = `€${participants.length * 50}`;
    }, 1000);
}

function renderParticipants() {
    const participantsList = document.getElementById('participantsList');
    
    if (participants.length === 0) {
        participantsList.innerHTML = '<p>No participants yet. Be the first to register!</p>';
        return;
    }
    
    let html = '';
    for (let i = 0; i < participants.length; i++) {
        const participant = participants[i];
        html += `
            <div class="participant-card">
                <div class="participant-info">
                    <h3>${participant.name}</h3>
                    <p>Age: ${participant.age} | Gender: ${participant.gender} | Email: ${participant.email}</p>
                </div>
                <div class="participant-actions">
                    <button class="btn btn-edit" onclick="editParticipant(${participant.id})">
                        Edit
                    </button>
                    <button class="btn btn-danger" onclick="deleteParticipant(${participant.id})">
                        Delete
                    </button>
                </div>
            </div>
        `;
    }
    
    participantsList.innerHTML = html;
}

function addParticipant(formData) {
    const newParticipant = {
        id: nextId,
        name: formData.name,
        age: parseInt(formData.age),
        email: formData.email,
        gender: formData.gender
    };
    
    participants.push(newParticipant);

    document.getElementById('totalRaised').textContent = `€${participants.length * 50}`;
    
    nextId++;
    
    renderParticipants();
    
    updateParticipantCount();
    
    showMessage('New participant registered! 🎉');
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        gender: document.getElementById('gender').value
    };
    
    addParticipant(formData);
    
    document.getElementById('registrationForm').reset();
}

function showMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = 'success-message';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(function() {
        document.body.removeChild(messageDiv);
    }, 3000);
}
    
 function startApp() {
    document.getElementById('registrationForm').addEventListener('submit', handleFormSubmit);
    
    loadParticipants();
}

window.addEventListener('load', startApp);

//Ana - participant editing, and deletion

function deleteParticipant(id) {
    if (confirm('Remove this participant?')) {
        
        participants = participants.filter(participant => participant.id !== id);
        
        renderParticipants();
        
        updateParticipantCount();

        document.getElementById('totalRaised').textContent = `€${participants.length * 50}`;

    }
}

function editParticipant(id) {
    const participant = participants.find(p => p.id === id);
    
    const newName = prompt('Enter new name:', participant.name);
    const newAge = prompt('Enter new age:', participant.age);
    const newEmail = prompt('Enter new email:', participant.email);
    const newGender = prompt('Enter new gender:', participant.gender);
    
    if (newName && newAge && newEmail) {
        
        participant.name = newName;
        participant.age = parseInt(newAge);
        participant.email = newEmail;
        participant.gender = newGender;
        
        renderParticipants();
        
        updateParticipantCount();

        document.getElementById('totalRaised').textContent = `€${participants.length * 50}`;
    }
}

function updateParticipantCount() {
    const count = participants.length;
    
    document.getElementById('participantCount').textContent = count;
}


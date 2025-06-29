// JavaScript file: main.js

document.addEventListener('DOMContentLoaded', () => {
    const participantCountElement = document.getElementById('participantCount');
    const participantsList = document.getElementById('participantsList');
    const registerBtn = document.getElementById('registerBtn');
    const successMessage = document.getElementById('successMessage');
    const loadingMessage = document.getElementById('loadingMessage');
    const registrationForm = document.getElementById('registrationForm');
    
    let participantCount = 0;
    let participants = [];

    // Simulate fetching participants from a server
    function loadParticipants() {
        loadingMessage.style.display = 'block';
        setTimeout(() => {
            participants = [
                { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
                { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' }
            ];
            updateParticipantList();
            loadingMessage.style.display = 'none';
        }, 1000);
    }

    function updateParticipantList() {
        participantsList.innerHTML = '';
        participants.forEach(participant => {
            const card = document.createElement('div');
            card.classList.add('participant-card');
            card.innerHTML = `
                <div class="participant-info">
                    <h3>${participant.name}</h3>
                    <p>${participant.email}</p>
                    <p>${participant.phone}</p>
                </div>
                <div class="participant-actions">
                    <button class="btn-edit">Edit</button>
                    <button class="btn-danger">Remove</button>
                </div>
            `;
            participantsList.appendChild(card);
        });
        participantCountElement.textContent = participants.length;
    }

    // Handle form submission
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Add participant to the list
        participants.push({ name, email, phone });
        updateParticipantList();

        // Show success message
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    });

    // Load initial participants on page load
    loadParticipants();

    // Register button click action
    registerBtn.addEventListener('click', () => {
        registrationForm.scrollIntoView({ behavior: 'smooth' });
    });
});
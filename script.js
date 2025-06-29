<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Challenge - CRUD Contacts App</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <div class="header">
        <h1>🏃‍♀️Run for Good</h1>
        <p>Charity Marathon Registration - Berlin, July 2025</p>
        <p>Join us in making a difference!</p>
        <p>Register now to participate in our charity marathon and help us reach our fundraising goal! All proceeds go to a local charity.</p>
    </div>

    <div class="stats">
        <h2>Registration Stats</h2>
        <p>Current participants: <strong id="participantCount">0</strong></p>
        <p>Target: <strong>100 runners</strong></p>
        <p>Target amount: <strong>EUR 5000</strong></p>

        <!-- ✅ NEW: Progress Bar -->
        <div class="progress-bar">
            <label for="donationProgress">Fundraising Progress:</label>
            <progress id="donationProgress" value="0" max="5000"></progress>
            <span id="donationAmount">€0</span>
        </div>
    </div>

    <form id="registrationForm">
        <div class="form-group">
            <label for="name">Full Name:</label>
            <input type="text" id="name" required>
        </div>
        
        <div class="form-group">
            <label for="age">Age:</label>
            <input type="number" id="age" min="16" max="99" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
        </div>
        
        <div class="form-group">
            <label for="gender">Gender:</label>
            <select id="gender" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
            </select>
        </div>

        <!-- ✅ NEW: Optional Donation -->
        <div class="form-group">
            <label for="donation">Optional Donation (EUR):</label>
            <input type="number" id="donation" min="0" step="1" placeholder="e.g., 50">
        </div>

        <button type="submit" class="btn">Register</button>
    </form>

    <div class="participants-section">
        <h2 class="participants-header">Registered Participants</h2>

        <!-- ✅ NEW: Filter by Gender -->
        <div class="form-group">
            <label for="genderFilter">Filter by Gender:</label>
            <select id="genderFilter">
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
            </select>
        </div>

        <div id="participantsList" class="participants-list">
            <div class="loading">
                <p>Loading participants...</p>
            </div>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>
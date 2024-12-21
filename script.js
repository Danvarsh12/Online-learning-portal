// Sample courses data
const courses = [
    { title: "Web Development", description: "Learn HTML, CSS, and JavaScript to build websites." },
    { title: "Data Science", description: "Learn Python, data analysis, and machine learning." },
    { title: "Graphic Design", description: "Learn Photoshop, Illustrator, and other design tools." },
    { title: "Digital Marketing", description: "Learn SEO, SEM, and social media marketing." }
];

// Function to display courses dynamically
function displayCourses() {
    const coursesContainer = document.getElementById('courses');
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button>Enroll Now</button>
        `;
        coursesContainer.appendChild(courseCard);
    });
}

// Handling user login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating a simple login check
    if (username === "user" && password === "password") {
        alert("Login Successful");
        document.getElementById('login').style.display = 'none'; // Hide login form after successful login
        displayCourses(); // Display courses
    } else {
        alert("Invalid username or password");
    }
});

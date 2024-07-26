body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
}

input {
    padding: 10px;
    margin: 10px 0;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#message {
    font-weight: bold;
    color: #d9534f; /* Red color for error messages */
}

#hint {
    color: #5bc0de; /* Blue color for hints */
}

.modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

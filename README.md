
# Yoga registration 

Hi folks,I completed an internship assignment for Flexmoney where I developed a project using the MERN stack. This project allows users to register for yoga classes. Throughout this experience, I delved into
various aspects including form validation, linking the frontend to the backend, and deploying the web application online. It was an enjoyable learning process that introduced me to new skills and techniques.
## Live Project:

https://yoga-addmission.netlify.app/




## Screenshots
 Registration page:
 
![Screenshot 2023-12-18 143037](https://github.com/BuTcheR0512/Flexmoney/assets/86340653/ec2d9846-9274-4e4c-87a2-b74511ce0cf9)

ER diagram:

![ER diagram](https://github.com/BuTcheR0512/Flexmoney/assets/86340653/8a80e156-387e-462d-8797-9e72b94472a1)



## Tech Stack

**Client:** Reactjs, Axios, JavaScript, CSS

**Server:** Nodejs, Expressjs, MongoDB




## Run Locally

Clone the project

```bash
  git clone https://github.com/BuTcheR0512/Flexmoney
```

Go to the project directory

```bash
  cd yoga
```

Install dependencies

```bash
  npm install
```

Go to the project directory

```bash
  cd client
```

Start the server

```bash
  npm run start
```


## My workflow for this project was:

1.Created the frontend of admission form using HTML,CSS and  reactjs.  
2.Basics input button has been made with basic validations as stated in the assignment.  
3.The form is made responsive so that is do not get distorted in any device.          
4.The backend was created using mongoDB,expressjs and nodejs.                     
5.Show a "Payment Successful" message on next page after a user is created.

## The validations which is done in my project are:

1.Every input field is filled by the user.  
2.No field can be left empty.  
3.DOB is taken in date type and age is calculated.  
4.Age should be between 18 to 65.  
5.User gets a dropbox to select gender.  
6.Contact Number should be of 10 digits.  
7.Fees is by defalut Rs.500 and can be changed by user.  
8.Fees should be excatly equal to Rs.500.  
9.User get a dropbox to select slot timing.  
10.Only after all the slots are filled you can proceed further.


This project can be used in the real world if I add a payment method which would accpet the payment and a admin and a user pannel is made so that user can view their profile and any payment mismatch is not there on monthly basis.



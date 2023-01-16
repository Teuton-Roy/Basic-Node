# Basic-Node


# Single thread can manage multiple connections
    Because, non-blocking I/O model

# What is non-blocking I/O model
    When we run nodejs in sarver it's perticuler one thread can handel many connections.    
    Let suppose, I run a process which is I/O bound mean's wait for database excutor fatch so it's doesn't block thread and wait for a callback. When that particular I/O bound resolved a event fired.    

# What is nmp?
    nmp stands for node package manager.

# why use [npm init] command
    This utility will walk us through creating a package.json file.

# What is Expressjs?
    Express is a flexible Node.js web application framework that provides a strong set of features for web and mobile applications.

# How to install Express in myapp directory and save it in the dependencies list?
    $ npm install express

# To install Express temporarily and not add it to the dependencies list:
    $ npm install express --no-save

# What is nodemon?
    nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application   when file changes in the directory are detected

# Install nodemon in our system path globally:
    npm install -g nodemon

# Install nodemon as a development dependency:
    npm install --save-dev nodemon

# After download nodemon in your system if you get error like [nodemon : File C:\Users\user\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running   scripts is disabled on this system. For more information, see about_Execution_Policies at   https:/go.microsoft.com/fwlink/?LinkID=135170.]
    1. Open PowerShell (Run As Administrator)  
    2. Check the current execution policy using this command  
        Get-ExecutionPolicy
        # You should get 'Restricted'
    3. Run this command to make it 'Unrestricted'  
        Set-ExecutionPolicy Unrestricted  
    4. Check again whether execution policy changed by running this command  
        Get-ExecutionPolicy
        # You should get 'Unrestricted'
    5. Now try to run nodemon on your project  
        nodemon 'filename.js'  
        

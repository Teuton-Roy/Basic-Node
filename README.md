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
    nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected

# Install nodemon in our system path globally:
    npm install -g nodemon

# lso install nodemon as a development dependency:
    npm install --save-dev nodemon


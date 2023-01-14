# Basic-Node


# Single thread can manage multiple connections
    Because, non-blocking I/O model

# What is non-blocking I/O model
    When we run nodejs in sarver it's perticuler one thread can handel many connections.    
    Let suppose, I run a process which is I/O bound mean's wait for database excutor fatch so it's doesn't block thread and wait for a callback. When that particular I/O bound resolved a event fired.    

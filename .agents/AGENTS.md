# Notification Rule

At the very end of EVERY task (both long and short), you MUST run the following command to notify the user that you are finished:
`powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File c:\Users\dvsat\Desktop\MSL\.agents\notify.ps1`

Do this as your final tool call in the task.

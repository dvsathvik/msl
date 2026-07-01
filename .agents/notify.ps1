Add-Type -AssemblyName System.Windows.Forms
$balloon = New-Object System.Windows.Forms.NotifyIcon
$balloon.Icon = [System.Drawing.Icon]::ExtractAssociatedIcon('C:\Windows\explorer.exe')
$balloon.BalloonTipIcon = 'Info'
$balloon.BalloonTipText = 'Antigravity task completed!'
$balloon.BalloonTipTitle = 'Antigravity IDE'
$balloon.Visible = $true
$balloon.ShowBalloonTip(5000)
[System.Media.SystemSounds]::Asterisk.Play()
Start-Sleep -Seconds 5
$balloon.Dispose()

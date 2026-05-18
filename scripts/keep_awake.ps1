param(
    [int]$RefreshSeconds = 50
)

$sig = @'
using System;
using System.Runtime.InteropServices;
public static class Power {
    [DllImport("kernel32.dll", SetLastError = true)]
    public static extern uint SetThreadExecutionState(uint esFlags);
}
'@

Add-Type -TypeDefinition $sig -ErrorAction SilentlyContinue

$ES_CONTINUOUS       = [uint32]"0x80000000"
$ES_SYSTEM_REQUIRED  = [uint32]"0x00000001"

$flags = $ES_CONTINUOUS -bor $ES_SYSTEM_REQUIRED

Write-Output "[keep_awake] pid=$PID started $(Get-Date -Format o); refresh=${RefreshSeconds}s; mode=system-only (display may sleep)"

try {
    while ($true) {
        [void][Power]::SetThreadExecutionState($flags)
        Start-Sleep -Seconds $RefreshSeconds
    }
}
finally {
    [void][Power]::SetThreadExecutionState($ES_CONTINUOUS)
    Write-Output "[keep_awake] pid=$PID released $(Get-Date -Format o)"
}

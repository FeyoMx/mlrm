param([ValidateRange(1024, 65535)][int]$Puerto = 8000)

$ErrorActionPreference = 'Stop'
$runtimePython = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
$candidates = @($runtimePython)
foreach ($name in @('python', 'py')) {
    $command = Get-Command $name -ErrorAction SilentlyContinue
    if ($command) { $candidates += $command.Source }
}
foreach ($candidate in ($candidates | Select-Object -Unique)) {
    if (-not (Test-Path -LiteralPath $candidate)) { continue }
    try {
        & $candidate --version 2>$null | Out-Null
        if ($LASTEXITCODE -ne 0) { continue }
    } catch { continue }
    Write-Host "Landing local: http://127.0.0.1:$Puerto (Ctrl+C para detener)"
    & $candidate -m http.server $Puerto --bind 127.0.0.1 --directory $PSScriptRoot
    exit $LASTEXITCODE
}
throw 'No se encontro una instalacion funcional de Python. Instale Python y vuelva a ejecutar este script.'

$commit = Read-Host -Prompt 'Ingresa tu comentario'

git add .

git commit -m "$commit"

git push
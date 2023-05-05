for file in ./dist/*.cjs; do 
    mv -- "$file" "${file%.cjs}.js"
done
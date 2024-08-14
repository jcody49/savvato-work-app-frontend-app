# Migration from Create-React-App (CRA) to Vite

- Migrating from Create React App (CRA) to Vite can be done in 2 ways:
    - [Manually](#manual-process)
    - [Automatically](#automated-process)

## Manual Process

1. **Install Vite**:
   ```sh
    npm create vite@latest
   ```

2. **Move Files**:
   - Move your `src` and `public` directories from your CRA project to the new Vite project.
   - Copy over any other necessary files like `.gitignore`, `README.md`, etc.

3. **Update `index.html`**:
   - Vite uses a different structure for `index.html`. Ensure your `index.html` in the `public` directory is updated accordingly.

4. **Update `package.json`**:
   - Copy over your dependencies and devDependencies from CRA's `package.json` to Vite's `package.json`.
   - Update the scripts section to use Vite commands:
     ```json
        "scripts": {
        "dev": "vite",
        "build": "vite build",
        "serve": "vite preview"
        }
     ```

5. **Update Imports**:
   - Vite uses ES Modules, so ensure all your imports are compatible.
   - Update any paths if necessary.

6. **Install Dependencies**:
   ```sh
    npm install
   ```

7. **Run the Development Server**:
   ```sh
    npm run dev
   ```

### Example `package.json`

Here is an example of how your `package.json` might look after migration:

```json
    {
    "name": "work-app",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-router-dom": "^6.23.0"
    },
    "devDependencies": {
        "vite": "^3.0.0",
        "@vitejs/plugin-react": "^1.0.0"
    },
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "serve": "vite preview"
    }
    }
```


## Automated Process

There is a tool called `cra-to-vite` that can help automate the migration process:

1. **Run the Migration**:
   ```sh
    npx cra-to-vite
   ```

This tool will handle most of the migration steps for you, including updating the `index.html`, `package.json`, and moving files.

### Example `package.json`
```json
    {
    "name": "work-app",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-router-dom": "^6.23.0"
    },
    "devDependencies": {
        "vite": "^3.0.0",
        "@vitejs/plugin-react": "^1.0.0"
    },
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "serve": "vite preview"
    }
    }
```


Make sure to test your application thoroughly after migration to ensure everything works as expected.


<hr>
<br>
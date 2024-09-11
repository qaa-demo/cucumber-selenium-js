## **Introduction to Git and GitHub for Windows**

### **1. Installing Git Locally**

1. **Download Git:**
   - Go to [Git for Windows](https://git-scm.com/download/win) and download the installer.

2. **Run the Installer:**
   - Open the downloaded `.exe` file.
   - Follow the installation prompts, keeping the default settings for most users.
   - Ensure "Git from the command line and also from 3rd-party software" is selected.

3. **Verify Installation:**
   - Open Command Prompt (`cmd`) or Git Bash (installed with Git).
   - Run:
     ```sh
     git --version
     ```
   - This should display the installed Git version.

### **2. Basic Git Commands**

1. **Initialize a Local Git Repository:**
   - Open Command Prompt or Git Bash.
   - Navigate to your project directory:
     ```sh
     cd path\to\your\project
     ```
   - Initialize the Git repository:
     ```sh
     git init
     ```

2. **Check Repository Status:**
   - Check the status of your repository:
     ```sh
     git status
     ```

### **3. Creating a GitHub Account**

1. Go to [GitHub](https://github.com) and sign up for an account.
2. Follow the setup instructions to complete your profile.

### **4. Creating a Remote Repository on GitHub**

1. Log in to your GitHub account.
2. Click the `+` icon in the top right corner and select "New repository."
3. Enter a repository name, add a description, and click "Create repository."

### **5. Cloning the Remote Repository Locally**

1. Go to your GitHub repository page.
2. Click the "Code" button and copy the repository URL (choose HTTPS).
3. Open Command Prompt or Git Bash and run:
   ```sh
   git clone <repository-url>
   ```
   Replace `<repository-url>` with the URL you copied. This will create a local copy of the repository.

### **6. Opening the Repository in VS Code**

1. Navigate to your cloned repository directory:
   ```sh
   cd path\to\cloned\repository
   ```
2. Open VS Code in that directory:
   ```sh
   code .
   ```
   If `code` is not recognized, you may need to [install the VS Code command line tools](https://code.visualstudio.com/docs/setup/windows#_launching-from-the-command-line).

### **7. Adding and Committing Files**

1. **Create a `README.md` File:**
   - In VS Code, create a new file named `README.md` with some initial content:
     ```
     # My Project
     This is a sample project.
     ```

2. **Check Repository Status:**
   - Back in Command Prompt or Git Bash, check the status:
     ```sh
     git status
     ```

3. **Add Files to the Staging Area:**
   - Stage all changes:
     ```sh
     git add .
     ```

4. **Commit Changes:**
   - Commit the changes with a message:
     ```sh
     git commit -m "Add README file"
     ```

### **8. Pushing Changes to GitHub**

1. **Push Your Commits:**
   - Push the commits to the remote repository:
     ```sh
     git push origin main
     ```
   - If your branch is `master`, use `master` instead of `main`.

### **9. Viewing Remote Repositories**

1. **Check Remote Repositories:**
   - To view remote repository URLs:
     ```sh
     git remote -v
     ```

### **Summary of Commands:**

- `git status`: Check the status of your repository.
- `git init`: Initialize a new Git repository.
- `git add .`: Stage all changes.
- `git commit -m "message"`: Commit changes with a message.
- `git push origin main`: Push changes to the remote repository.
- `git remote -v`: View remote repository URLs.

### **Resources and References**


- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [W3Schools Git Tutorial](https://www.w3schools.com/git/git_intro.asp?remote=github)


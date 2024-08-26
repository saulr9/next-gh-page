### Activities

- GitHub Actions are Easy with GitHub Copilot!
- Deploy to GitHub Pages with GitHub Actions and Copilot
- Create Reusable Workflows.

### General Objectives:

- Become familiar with using GitHub Copilot to create automated workflows in GitHub Actions:
- Automate the development and deployment lifecycle of a Next.js application using GitHub Actions

### Specific Objectives:

- Set up the Node.js environment using GitHub Actions
- Run automated tests and build the application
- Integrate security actions into the workflow
- Deploy the Next.js application to GitHub Pages
- Optimize and refine the workflow with GitHub Copilot's assistance

### Expected Outcomes:

By the end of the hands-on session, you should have a fully functional CI/CD pipeline that handles everything from dependency installation to deploying the application on GitHub Pages.
Additionally, you will have learned how to leverage GitHub Copilot to accelerate the setup of workflows in GitHub Actions and how to integrate security tools into the process.

### Step 1: Clone the Repository

### Step 2: Create a New Repository

Settings -> Actions -> General -> Workflow Permissions -> Read and Write

### Step 3: Add New Remote to Cloned Repository

### Step 4: Create a basic workflow template using GitHub Copilot

```
@workspace I want to create a basic github workflow called handson that trigger on every push to main branch. I just want the trigger step
```

### Step 5: Define job in the workflow

```
#file:handson.yml define a job ci without steps, use ubuntu-latest as runner
```

### Step 6: Checkout Code andSetup Node

```
Add steps to checkout code and setup node, use node version 20
```

### Step 7: Implement CodeQl to code analisis and find vulnerabilities

```
I want to implement a step to code analisis and find vulnerabilities, use codeQl and Javascript/TypeScript as target languages and explain me the new steps
```

Reference:

- https://codeql.github.com/
- https://github.com/github/codeql-action/blob/v2/analyze/action.yml

### Step 8: Implement TruffleHog to Find Leaked Credentials

Now, I want to implement a step to find possible leaked credentials, use trufflesecurity/trufflehog with the main version, only-verified as extra_args, head with the current ref name

In case that you have some errors with the version use:

```
name: Scan for leaked credentials
uses: trufflesecurity/trufflehog@main
with:
base: ""
head: ${{ github.ref_name }}
extra_args: --only-verified
```

Reference:

- https://github.com/trufflesecurity/trufflehog

### Step 9: Add step to run test

Ask to copilot chat or use comment driven development to add another step to run tests

Copilot chat: Add another step to run tests with npm run

Comment driven development: Add another step to run tests with npm run

### Step 10: Add step to build

Copilot chat: Add another step to run the build with npm run
Comment driven development:Add another step to run the build with npm run

### Step 11: Test workflow

We are going to test our workflow, pleas commit and push to main branch. Then:

- Go to your repository
- Navigate to "Actions tab"
  You will see your workflow running

## Deploy to GitHub Pages with GitHub Actions and Copilot

### Step 1: Add Step to upload out directory with upload artifact action

Ask to copilot chat to add a new step in the current job to upload the out directory using upload artifact action

```
Now, I want to use the upload artifact action to upload the out directory
```

### Step 2: Create a new job to deploy our app

Ask to copilot chat to create another job called deploy and to add a step to dwonload the previous uploaded artifact

```
How to create another job called deploy with only a step to download an artifact and the output should be 'out'
```

### Step 3: Add step to deploy to GitHub Pages

Ask to copilot how to deploy to github page

```
How to deploy the out directory to github page?
```

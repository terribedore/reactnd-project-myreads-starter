## Your Workspace
A Workspace is a development environment integrated into the Udacity Classroom. Your Workspace is backed by a Linux virtual machine (Ubuntu). You have access to a terminal, so you have complete control over installing packages and modifying content.

Below is what your Workspace will look like:

[MyReads project Workspace](https://d17h27t6h515a5.cloudfront.net/topher/2017/September/59b2e515_nd019-c1-workspace-myreads-project/nd019-c1-workspace-myreads-project.jpg)
*__Here's your Workspace! We'll go over the important bits in a second.__*

The following video will walk through:

* navigating the file explorer
* opening, editing, and closing files
* working with a terminal
* previewing your content
* submitting your project
* resetting the project

[Walk Through Video](https://www.youtube.com/watch?v=7qsNuqlJOR4)

## Preservation Information
The first time you open your Workspace, a new virtual machine is created just for you. Any files that you modify in `/home/workspace` or any new files you add in `/home/workspace` are automatically backed up and saved. The next time you come back to the Workspace, any previous changes will be preserved.

If you don't interact with the Workspace for 30 minutes, the Workspace will be suspended. The Workspace becomes idle by any of the following:

* not interacting with the browser tab of the Workspace
* closing the browser tab with the Workspace
* if your laptop goes to sleep
* etc

[A Workspace that has become idle.](https://d17h27t6h515a5.cloudfront.net/topher/2017/September/59b2e561_nd019-c1-workspace-idle/nd019-c1-workspace-idle.jpg)
*__This Workspace has been suspended and is now idle.__*

## Restoring Your Workspace
If your Workspace has been suspended after a period of inactivity, just click the "Wake Up Workspace" button to restore it. Remember that none of your data is lost.

## Project Development
Think of your Workspace as a normal computer:

*Open up the files you need to edit (saving is done automatically).
* Open terminal windows as necessary.
  * The terminal should start at `/home/workspace`, so make sure to `cd` to the correct directory as necessary.
* Start the project
  * start a terminal (no need to `cd` anywhere)
  * run `npm install`
  * run `npm start`

[How to view the project in a Workspace](https://d17h27t6h515a5.cloudfront.net/topher/2017/September/59b2eef4_nd019-c1-workspace-project-url/nd019-c1-workspace-project-url.jpg)
*__To view your project, click the Open Preview Tab.__*

* To view your project, click the "Open Preview Tab" button located in the lower left of the screen.
  * Running `npm start` causes Create React App to display a URL of `http://localhost:3000/`. Because your Workspace is running in a virtual machine, typing `http://localhost:3000/` into your browser will not access the local host of the VM, so make sure to use the "Open Preview Tab" button.
* To submit your project, click the "Submit Project" button located in the lower right side of the screen.

## Development Choice
We've created this Workspace for you so you can enjoy an integrated learning experience by staying in the classroom, working on your project, and submitting directly from here!

You always have the option to develop your project locally, if you choose. To develop locally on your computer, clone the git repository for the [MyReads project](https://github.com/udacity/reactnd-project-myreads-starter) directly to your computer's file system (AKA your local machine).

## Unable to Access Your Workspace?
If you are unable to access your Workspace in the Classroom it could be because you have "3rd Party Cookies" disabled in your browser. Workspaces need to set a "3rd party cookie" to enable access.

Check out this [Workspace troubleshooting FAQ](https://udacity.zendesk.com/hc/en-us/articles/115004653246) for information on how to enable 3rd party cookies for your browser.

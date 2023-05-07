// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge;
function renderLicenseBadge() {
  licenseList = [
    {
      license: "None",
      label: "",
      badge: "",
      link: "",
    },
    {
      license: "Apache License 2.0",
      label: "License",
      badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      link: "https://opensource.org/licenses/Apache-2.0",
    },
    {
      license: "GNU General Public License v3.0",
      badge: "",
      link: "",
    },
  ];
  return licenseList;
  // return `\n\n[![${licenseList[1].label}](${licenseList[1].badge})](${licenseList[1].link})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  dataRenderList = [
    `## Description \n ${data.project_description}\n\n`,
    `## Installation \n ${data.project_installation}\n\n`,
    `## Usage \n ${data.project_usage}\n\n`,
    `## Contribution Guidelines \n ${data.project_contribution_guidelines}\n\n`,
    `## Testing \n ${data.project_testing}\n\n`,
    `## License \n ${data.project_license}\n\n`,
  ];
  return dataRenderList;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};

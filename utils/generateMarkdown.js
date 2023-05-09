/**
 * generates badge, badge label, and license link
 * @returns
 */
function renderLicenseBadge() {
  linkList = [
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
      label: "License: GPL v3",
      badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
      link: "https://www.gnu.org/licenses/gpl-3.0",
    },
    {
      license: "MIT License",
      label: "License: MIT",
      badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
      link: "https://opensource.org/licenses/MIT",
    },
    {
      license: `BSD 2-Clause "Simplified" License`,
      label: "License",
      badge: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
      link: "https://opensource.org/licenses/BSD-2-Clause",
    },
    {
      license: `BSD 3-Clause "Simplified" License`,
      label: "License",
      badge: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
      link: "https://opensource.org/licenses/BSD-3-Clause",
    },
    {
      license: "Boost Software License 1.0",
      label: "License",
      badge: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
      link: "https://www.boost.org/LICENSE_1_0.txt",
    },
    {
      license: "Creative Commons Zero v1.0 Universal",
      label: "License: CC0-1.0",
      badge: "https://licensebuttons.net/l/zero/1.0/80x15.png",
      link: "http://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      license: "Eclipse Public License 2.0",
      label: "License",
      badge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
      link: "https://opensource.org/licenses/EPL-1.0",
    },
    {
      license: "GNU Affero General Public License v3.0",
      label: "License: AGPL v3",
      badge: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
      link: "https://www.gnu.org/licenses/agpl-3.0",
    },
    {
      license: "GNU General Public License v2.0",
      label: "License: GPL v2",
      badge: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
      link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    },
    {
      license: "GNU Lesser General Public License v3.0",
      label: "License: LGPL v3",
      badge: "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
      link: "https://www.gnu.org/licenses/lgpl-3.0",
    },
    {
      license: "Mozilla Public License 2.0",
      label: "License: MPL 2.0",
      badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
      link: "https://opensource.org/licenses/MPL-2.0",
    },
    {
      license: "The Unlicense",
      label: "License: Unlicense",
      badge: "https://img.shields.io/badge/license-Unlicense-blue.svg",
      link: "http://unlicense.org/",
    },
  ];
  return linkList;
}

/**
 * generates markdown for README sections
 * @param {*} data
 * @returns
 */
function generateMarkdown(data) {
  dataRenderList = [
    `## Description \n - ${data.project_description}\n\n`,
    `## Table of Contents \n\n`,
    ` - [Installation](#installation)\n`,
    ` - [Usage](#usage)\n`,
    ` - [Contribution Guidelines](#contribution-guidelines)\n`,
    ` - [Testing](#testing)\n`,
    ` - [License](#license)\n`,
    ` - [Questions](#questions)\n\n`,
    `## Installation \n - ${data.project_installation}\n\n`,
    `## Usage \n - ${data.project_usage}\n\n`,
    `## Contribution Guidelines \n - ${data.project_contribution_guidelines}\n\n`,
    `## Testing \n - ${data.project_testing}\n\n`,
    `## License \n - [${data.project_license}](${licenseLink})\n\n`,
    `## Questions? \n\n`,
    `### For further information about this project, see below: \n`,
    ` - [Visit my Github](https://github.com/${data.project_author_username})\n\n`,
    ` - [Email me here](mailto:${data.project_author_email})\n`,
  ];
  return dataRenderList;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
};

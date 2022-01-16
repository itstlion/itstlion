# It's T.Lion - Changelog

All notable changes to this project will be documented in this file.

> The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0).
> Also, this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Types of changes

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## Work in progress

## Version 2.1.0 - 2022/01/16

### Changed

- Retrieve releases locally.

## Version 2.0.3 - 2021/11/11

### Added

- Error handling when a release doesn't have links.

## Version 2.0.2 - 2021/09/24

### Fixed

- Random rendering of releases.

## Version 2.0.1 - 2021/09/07

### Security

- Fix vulnerabilities introduced by `tar` dependency.

## Version 2.0.0 - 2021/08/08

### Changed

- Move source code in root folder.

## Version 1.8.0 - 2021/07/27

### Changed

- Release's covers are now retrieved from API.

## Version 1.7.1 - 2021/07/23

### Added

- Release body template for repository.

### Changed

- Resize all images to a maximum of **300px square**.

## Version 1.7.0 - 2021/07/22

### Added

- Add dynamic anchor for releases (try `https://itstlion.com/releases#release-name`).

### Changed

- Update issue templates for GitHub repository.

## Version 1.6.2 - 2021/07/18

### Fixed

- Application's version wasn't upgraded during last release.

## Version 1.6.1 - 2021/07/18

### Added

- Cover artwork for **Sunny Window** release.

### Fixed

- Core module for using API v4 instead of API v3.

## Version 1.6.0 - 2021/07/17

### Added

- Docker Compose configuration for development environment.

### Changed

- Improved version number reaction in footer.

## Version 1.5.0 - 2021/07/05

### Added

- Footer with version number of the application.
- Transitions for improving User Experience (UX).

### Changed

- UI of loader and reload button.
- Modernize releases UI.
- Dark theme following [Material Design principles](https://material.io/design/color/dark-theme.html).

### Fixed

- Bottom sheet's bad display on small mobiles.

## Version 1.4.0 - 2021/06/25

### Added

- **Stillness in Darkness** release's artwork.

## Version 1.3.1 - 2021/06/08

### Fixed

- Bad requests to API v3.

## Version 1.3.0 - 2021/06/08

### Changed

- Simplify `README` documentation.
- Migrate from API version 2 to 3.

## Version 1.2.3 - 2021/06/05

### Fixed

- Bad display on Apple devices.

## Version 1.2.2 - 2021/05/18

### Security

- Change API Url from HTTP to HTTPS in production.

## Version 1.2.1 - 2021/05/13

### Fixed

- Blurry release's covers.

## Version 1.2.0 - 2021/05/13

### Changed

- Release's covers are now retrieved from an external link.

## Version 1.1.3 - 2021/05/10

### Changed

- Update README documentation for public access.

### Fixed

- API url in production environment.

## Version 1.1.2 - 2021/05/07

### Added

- **Morning Light** release's cover.

## Version 1.1.1 - 2021/05/06

### Fixed

- Streaming links delayed display.

## Version 1.1.0 - 2021/05/05

### Added

- Progress spinner when loading data.
- Error notification and reloading button when releases retrieving fails.

### Changed

- Website logo.

## Version 1.0.3 - 2021/05/04

### Fixed

- Streaming links delayed display.
- Releases display on `1920 * 937px` screens.

## Version 1.0.2 - 2021/05/03

### Fixed

- NGINX configuration.

## Version 1.0.1 - 2021/05/03

### Fixed

- HTTPS/HTTP request mixing.

## Version 1.0.0 - 2021/05/03

### Added

- Release listing page.

## Version 0.1.0 - 2021/01/13

### Added

- Create application with [Angular](https://angular.io/).

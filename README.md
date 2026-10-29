# Custom Footer for Quartz

[🇬🇧 English](README.md) · [🇷🇺 Русский](README.ru.md)

A customizable footer component for [Quartz](https://quartz.jzhao.xyz/).

## Features

- Layout: copyright text on the left and configurable links on the right.
- Responsive layout: footer items stack and center on narrow screens.
- Customizable text after the copyright symbol and year.
- Automatically uses the current year; no annual manual updates are needed.
- Supports named links configured in `quartz.config.yaml`.
- Uses the Quartz community plugin installation approach.

## Requirements

- A working Quartz project.
- A Quartz version that supports community plugins using the `source`, `enabled`, and `options` configuration fields.

## Installation

From your Quartz project directory, run:

```bash
npx quartz plugin add github:semsig13-tech/custom-footer
```

If your Quartz setup uses a different community-plugin installation workflow, follow the instructions for your installed Quartz version.

## Configuration

Add the plugin to the `plugins` section in `quartz.config.yaml`:

```yaml
plugins:
  - source: github:semsig13-tech/custom-footer
    enabled: true
    options:
      copyrightText: "Name"
      copyright: true
      links:
        Website: https://www.name.org/
        GitHub: https://github.com/semsig13-tech/
```

Replace the example copyright text and links with your own values. Keep YAML indentation consistent.

### Example with Russian text

```yaml
plugins:
  - source: github:semsig13-tech/custom-footer
    enabled: true
    options:
      copyrightText: "Имя"
      copyright: true
      links:
        Сайт: https://www.name.org/
        ГитХаб: https://github.com/semsig13-tech/
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `copyrightText` | `string` | `""` | Text displayed after `©` and the current year. For example, `Name`. |
| `copyright` | `boolean` | `true` | Set to `false` to hide the copyright line. |
| `links` | `Record<string, string>` | `{}` | Footer links as `label: URL` pairs. |

The year is generated with `new Date().getFullYear()`. For example, the footer shows `© 2026 Name` in 2026 and automatically changes to `© 2027 Name` in 2027.

## Customize or hide the copyright line

Change the text in `copyrightText`:

```yaml
options:
  copyrightText: "My organization"
```

To hide the copyright line while keeping the links visible:

```yaml
options:
  copyright: false
```

## Add or change links

Add entries under `links`. The key is the visible label and the value is the destination URL:

```yaml
links:
  Documentation: https://example.com/docs
  GitHub: https://github.com
```

Links open in a new tab and use `rel="noopener noreferrer"`.

## Update the plugin

Run the community-plugin update command supported by your Quartz version, or remove and re-add the plugin using the Quartz CLI if that is the workflow supported by your installation. Check the Quartz documentation for version-specific commands: <https://quartz.jzhao.xyz/>

## Troubleshooting

- **The footer does not appear:** make sure the plugin entry is under `plugins`, `enabled` is set to `true`, and your Quartz layout includes the footer component.
- **The text or links do not update:** verify that you edited the `options` for this plugin in the correct `quartz.config.yaml`, then rebuild/restart your Quartz site.
- **YAML parsing errors:** check indentation and quote text containing special characters such as `:`.

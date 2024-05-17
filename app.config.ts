export default ({ config }: { config: Record<string, object> }) => {

    return {
      ...config,
      extra: {
        ...config.extra,
        storybookEnabled: process.env.STORYBOOK_ENABLED,
      },
    };
};
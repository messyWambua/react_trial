const webpackMerge = require("webpack-merge");
const modeConfiguration = env => require(`./config/webpack/webpack.${env}`);
const commonConfig = require('./config/webpack/webpack.common');

module.exports = ({ mode } = { mode: "development" }) => {
    console.log(`mode is: ${mode}`);

    return webpackMerge(
        commonConfig,
        modeConfiguration(mode)
    );
};

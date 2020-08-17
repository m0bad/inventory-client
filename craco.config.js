const CracoAntDesignPlugin = require('craco-antd');
const WebpackBar = require('webpackbar');
const { ESLINT_MODES } = require('@craco/craco');

module.exports = {

    plugins: [{ plugin: CracoAntDesignPlugin }],
    webpack: {
        plugins: [
            new WebpackBar(),
        ],
    },
    eslint: {
        mode: ESLINT_MODES.file,
    },

};

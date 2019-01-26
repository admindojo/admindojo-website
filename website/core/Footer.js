/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
    docUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + this.props.config.docsUrl + (language ? language + '/' : '') + doc;
    }

    pageUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + (language ? language + '/' : '') + doc;
    }

    render() {
        const currentYear = new Date().getFullYear();
        return (
            <footer className="nav-footer" id="footer">

                <section>
                    <div align="center">
                        <h4><a href={this.docUrl('about', this.props.language)}>
                            about admindojo
                        </a></h4>

                    </div>
                </section>

                {/*         <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href="https://github.com/admindojo">GitHub</a>
            </div>*/}

                <section className="copyright">{this.props.config.copyright} powered by < a
                    href="https://docusaurus.io">Docusaurus</a></section>
            </footer>
        );
    }
}

module.exports = Footer;

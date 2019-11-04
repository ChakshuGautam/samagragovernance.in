import React from "react";

export class ProductPageSecondSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstSectionAnimation: true,
            thirdSectionAnimation: false
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", (e) => {
            if (document.documentElement.scrollTop < 500 && !this.state.firstSectionAnimation) {
                this.setState({firstSectionAnimation: true});
            } else if (this.state.firstSectionAnimation && !(document.documentElement.scrollTop < 500)) {
                this.setState({firstSectionAnimation: false});
            }
            if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1800 && !this.state.thirdSectionAnimation) {
                this.setState({thirdSectionAnimation: true});
            } else if (this.state.thirdSectionAnimation && !(document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1800)) {
                this.setState({thirdSectionAnimation: false});
            }
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

    render() {
        const {firstSectionAnimation, thirdSectionAnimation} = this.state;
        const {project} = this.props;
        return (
            <div className={'product-page-second-section-wrapper'} style={{overflow: 'hidden'}}>
                <div className={`first-section row ${firstSectionAnimation ? 'visible' : ''}`}>
                    <div className="objective-wrapper col-md-6 col-sm-12">
                        <div className="background"/>
                        <div className="objective-card">
                            <div className="title">
                                Overview
                            </div>
                            {
                                project.overview.map((o) => {
                                    return <p>
                                        {o}
                                    </p>
                                })
                            }
                        </div>
                    </div>
                    <div className="scale-wrapper col-md-6 col-sm-12">
                        <div className="background"/>
                        <div className="scale-card">
                            <div className="list">
                                {
                                    project.scale.map((s) => {
                                        return <div className="list-item">
                                            <div className="count">
                                                {s.count}
                                            </div>
                                            <div className={'description'}>
                                                {s.label}
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-section row">
                    <div className="slider-wrapper col-12">
                        <div className="background"/>
                        <div className="slider-card"
                             style={{backgroundImage: `url(${'http://luezoid.com:3399/' + (project.centerBanner ? project.centerBanner : '')})`}}>
                        </div>
                    </div>
                </div>
                <div className={`third-section row ${thirdSectionAnimation ? 'visible' : ''}`}>
                    <div className="approach-wrapper col-md-6 col-sm-12">
                        <div className="background"/>
                        <div className="approach-card">
                            <div className="title">
                                Approach
                            </div>
                            {
                                project.approach.map((o) => {
                                    return <p>
                                        {o}
                                    </p>
                                })
                            }
                        </div>
                    </div>
                    <div className="impact-wrapper col-md-6 col-sm-12">
                        <div className="background"/>
                        <div className="impact-card">

                            <div className="list">
                                {
                                    project.impact.map((s) => {
                                        return <div className="list-item">
                                            <div className="count">
                                                {s.count}
                                            </div>
                                            <div className={'description'}>
                                                {s.label}
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


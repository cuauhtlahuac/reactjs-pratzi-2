import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../../widgets/containers/modal';
import Modal from '../../../widgets/components/modal';
import HandleError from '../../../errors/containers/handleError';
import VideoPlayer from '../../../Player/container/video-player';

class Home extends Component {
        state = {
            modalVisible: false,
        }
        handleOpenModal = (event) => {
            this.setState({
                modalVisible: true,
            })
        }
        handleCloseModal = (event) =>{           
            this.setState({
                 modalVisible: false,
             })
        }
    render(){
       return(
        <div>
          <HandleError>  
            <HomeLayout name='cuauh'>
                <Related/>
                <VideoPlayer/>          
                    <Categories 
                    categories={this.props.data.categories}
                    handleOpenModal={this.handleOpenModal}
                    />
                        {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <h1>Esto es un nuevo portal (window)</h1>
                            </Modal>
                        </ModalContainer>
                        }
            </HomeLayout>
          </HandleError>
          </div>
       )     
    }
}

export default Home
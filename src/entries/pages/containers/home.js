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
        //esta funcion es la que se pasaba de componente a componente...
        //va a recibir un parametro, ya no el evento de click, si no los props que envia el media que recibie de playlist
        //title, author etc.....
        handleOpenModal = (media) => {
            this.setState({
                modalVisible: true,
                media: media,
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
                    <Categories 
                    categories={this.props.data.categories}
                    handleOpenModal={this.handleOpenModal}
                    />
                        {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <h3>Leopark Video Player</h3>
                                <VideoPlayer
                                autoplay
                                //aquí agregamos los datos obtenidos con la funcion handleOpenModal
                                src={this.state.media.src}
                                title={this.state.media.title}
                                />                                       
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
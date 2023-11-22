import React from 'react';
import {View, Text} from 'react-native';

import {Button} from 'src/components/Button';
import { useHome } from './hook';
import { ModalLogin } from './components/ModalLogin';
import { ModalRegister } from './components/ModalRegister';

const Home: React.FC = () => {
  const {refs, actions} = useHome();

  return (
   <>
    <View className="bg-white flex flex-col items-center justify-center w-full h-full">
      <View className="w-full flex items-center justify-center flex-row gap-4 mb-40 bg-gray-600">
        
      </View>

      <View className="flex flex-col gap-4">
        <Button className="bg-orange-default w-72 h-16 rounded-lg flex items-center justify-center text-center"
        onPress={actions.handleOpenModalLogin}
        >
          <Text className="text-white text-lg">Login</Text>
        </Button>

        <Button className="bg-white w-72 h-16 rounded-lg flex items-center justify-center text-center border border-orange-default"
        onPress={actions.handleOpenModalRegister}
        >
          <Text className="text-orange-default text-lg">Cadastro</Text>
        </Button>
      </View>

      <ModalLogin modalRef={refs.modalLoginRef} />
      <ModalRegister modalRef={refs.modalRegisterRef} />
    </View>
   </>
  );
};

export default Home;
/**
 * 
 * restricts the instantiation of a class to one object
 * 
 * An implementation of the singleton pattern must:
 * ensure that only one instance of the singleton class ever exists; and
 * provide global access to that instance.
 */

const singleton = () => {
    let instance = null;
    let singletonConstructor = function() {
        // 
    };
    return {
        getInstance: () => {
            if (instance === null) {
                instance = new singletonConstructor();
            }
            return instance;
        }
    };
};

export const openModalSingleton = ((dom) => {
    let instance = null;
    let singletonConstructor = function() {
        // 
    };
    return {
        openModal: () => {
            dom.display = 'block';
            if (instance === null) {
                instance = new singletonConstructor();
                dom.innerHTML = instance;
            }
            return instance;
        },
        closeModal: () => {
            dom.display = 'none';
        }
    };
})(document.getElementById('root'));
import { openModalSingleton } from './openModalSingleton';

openModalSingleton.openModal();
openModalSingleton.openModal();
openModalSingleton.openModal();
openModalSingleton.closeModal();

import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';


/**
 * Permet de partager des données entre les composants
 * Possible de l'initialiser avec un provider : { provide: 'queuesKeys', useValue: ['formGroupe'] }
 */
@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private messagesQueues = new Map<string, Subject<any>>();

    // il est possible d'initialiser des queues de message
    constructor(@Inject('queuesKeys') @Optional() queuesKeys?: Array<string>) {
        if (queuesKeys) {
            this.addQueues(queuesKeys);
        }
    }

    /**
     * permet de créer des files de messages
     * @param queuesKeys liste de clés pour créer des queues
     */
    public addQueues(queuesKeys: Array<string>) {
        queuesKeys.forEach((key) => {
            this.addQueue(key);
        });
    }

    public addQueue(key: string) {
        const queue = new Subject<any>();
        this.messagesQueues.set(key, queue);
        return queue;
    }

    /**
     * Permet d'envoyer un message dans une file d'attente
     * @param key clé de la file de messages
     * @param message donnée à envoyer
     */
    sendData(key: string, message: object) {
        // retrouve la file de message demandée
        let queue = this.messagesQueues.get(key);
        // si la file de message n'existe pas, nous en ajoutons une nouvelle avec la clé fournie
        if (!queue) {
            queue = new Subject<any>();
            this.messagesQueues.set(key, queue);
        }

        queue.next(message);
    }

    /**
     * Permet de récupérer une file de messages
     * @param key clé de la file de message
     */
    getMessagesQueues(key: string): Observable<any> {
        const messageQueue = this.messagesQueues.get(key) || this.addQueue(key);

        return messageQueue;
    }
}

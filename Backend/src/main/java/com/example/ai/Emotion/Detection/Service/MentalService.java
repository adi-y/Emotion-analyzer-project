package com.example.ai.Emotion.Detection.Service;

import com.example.ai.Emotion.Detection.DTO.MentalRequest;
import com.example.ai.Emotion.Detection.DTO.MentalResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class MentalService {

    private final WebClient webClient;


    public MentalRequest buildRequest(String text){
        return new MentalRequest(text);
    }


    public  Mono<MentalResponse> createResponse(String text){
        return webClient.post()
                .uri("/analyze")
                .bodyValue(buildRequest(text))
                .retrieve()
                .bodyToMono(MentalResponse.class);



    }

}

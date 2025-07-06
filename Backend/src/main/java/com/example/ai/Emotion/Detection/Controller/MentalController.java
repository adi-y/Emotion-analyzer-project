package com.example.ai.Emotion.Detection.Controller;

import com.example.ai.Emotion.Detection.DTO.MentalRequest;
import com.example.ai.Emotion.Detection.DTO.MentalResponse;
import com.example.ai.Emotion.Detection.Service.MentalService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/mental")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class MentalController {
    private final MentalService service;

    @PostMapping
    public  Mono<ResponseEntity<MentalResponse>> create(@RequestBody MentalRequest request){
        return service.createResponse(request.getText())
                .map(ResponseEntity::ok);
    }
}

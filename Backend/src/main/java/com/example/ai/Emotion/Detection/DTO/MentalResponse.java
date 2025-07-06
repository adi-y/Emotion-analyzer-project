package com.example.ai.Emotion.Detection.DTO;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MentalResponse {

    private String emotion;
    private Double  confidence;
    private String tip;
}

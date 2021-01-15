package com.fitness.model;

import java.sql.Date;
import java.util.Map;

public class Day {
    private Date date;
    private Map<Exercise, Map<Integer, Integer>> tries;
}

class TechChoiceWizard {
    constructor() {
        this.currentCategory = null;
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.init();
    }

    init() {
        this.bindEvents();
        this.showCategorySelection();
    }

    bindEvents() {
        // Category selection
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.selectCategory(category);
            });
        });

        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Restart button
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restart();
        });
    }

    showCategorySelection() {
        this.hideAllSteps();
        document.getElementById('category-selection').classList.add('active');
    }

    selectCategory(category) {
        this.currentCategory = category;
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.showQuestionnaire();
    }

    showQuestionnaire() {
        this.hideAllSteps();
        document.getElementById('questionnaire').classList.add('active');
        this.renderQuestion();
    }

    renderQuestion() {
        const categoryData = techData[this.currentCategory];
        const question = categoryData.questions[this.currentQuestionIndex];
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / categoryData.questions.length) * 100;
        document.querySelector('.progress-fill').style.width = `${progress}%`;

        // Update question content
        document.getElementById('question-title').textContent = question.title;
        document.getElementById('question-description').textContent = question.description;

        // Render options
        const optionsContainer = document.getElementById('question-options');
        optionsContainer.innerHTML = '';

        question.options.forEach(option => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            optionCard.dataset.optionId = option.id;
            
            optionCard.innerHTML = `
                <h4>${option.title}</h4>
                <p>${option.description}</p>
            `;

            optionCard.addEventListener('click', () => {
                this.selectOption(question.id, option.id, optionCard);
            });

            optionsContainer.appendChild(optionCard);
        });

        // Update navigation buttons
        document.getElementById('prev-btn').style.display = 
            this.currentQuestionIndex === 0 ? 'none' : 'block';
        
        this.updateNextButton();
    }

    selectOption(questionId, optionId, optionElement) {
        // Remove previous selection
        document.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Add selection to clicked option
        optionElement.classList.add('selected');

        // Store answer
        this.answers[questionId] = optionId;

        // Enable next button
        this.updateNextButton();
    }

    updateNextButton() {
        const nextBtn = document.getElementById('next-btn');
        const categoryData = techData[this.currentCategory];
        const currentQuestion = categoryData.questions[this.currentQuestionIndex];
        
        const hasAnswer = this.answers[currentQuestion.id];
        nextBtn.disabled = !hasAnswer;

        // Update button text for last question
        if (this.currentQuestionIndex === categoryData.questions.length - 1) {
            nextBtn.textContent = 'Get Recommendations';
        } else {
            nextBtn.textContent = 'Next';
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
        }
    }

    nextQuestion() {
        const categoryData = techData[this.currentCategory];
        
        if (this.currentQuestionIndex < categoryData.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
        } else {
            this.showResults();
        }
    }

    calculateScores() {
        const categoryData = techData[this.currentCategory];
        const technologies = categoryData.technologies;
        
        if (this.currentCategory === 'frontend') {
            return this.calculateFrontendScores(technologies);
        } else if (this.currentCategory === 'backend') {
            return this.calculateBackendScores(technologies);
        } else if (this.currentCategory === 'database') {
            return this.calculateDatabaseScores(technologies);
        } else if (this.currentCategory === 'cloud') {
            return this.calculateCloudScores(technologies);
        }
    }

    calculateFrontendScores(technologies) {
        const experience = this.answers.experience || 'intermediate';
        const projectType = this.answers.project_type || 'personal';
        const teamSize = this.answers.team_size || 'solo';
        const priority = this.answers.priority || 'learning';

        // Get weights based on answers
        const baseWeights = frontendWeights.project[projectType] || frontendWeights.project.personal;
        const teamAdjustment = frontendWeights.team[teamSize] || frontendWeights.team.solo;
        
        // Combine weights (average them)
        const weights = {};
        Object.keys(baseWeights).forEach(key => {
            weights[key] = (baseWeights[key] + teamAdjustment[key]) / 2;
        });

        // Boost the priority factor
        if (weights[priority]) {
            weights[priority] *= 1.5;
        }

        // Calculate scores for each technology
        const scores = {};
        Object.keys(technologies).forEach(techKey => {
            const tech = technologies[techKey];
            const techScores = tech.scoring[experience] || tech.scoring.intermediate;
            
            let totalScore = 0;
            Object.keys(weights).forEach(factor => {
                totalScore += (techScores[factor] || 5) * weights[factor];
            });
            
            scores[techKey] = {
                ...tech,
                score: Math.round(totalScore * 10) / 10,
                rawScores: techScores
            };
        });

        return scores;
    }

    calculateBackendScores(technologies) {
        const language = this.answers.language_preference || 'any';
        const complexity = this.answers.project_complexity || 'moderate';
        const speed = this.answers.development_speed || 'mvp';
        const experience = this.answers.team_experience || 'some';

        // Get weights
        const complexityWeights = backendWeights.complexity[complexity] || backendWeights.complexity.moderate;
        const experienceWeights = backendWeights.experience[experience] || backendWeights.experience.some;
        
        // Combine weights
        const weights = {};
        Object.keys(complexityWeights).forEach(key => {
            weights[key] = (complexityWeights[key] + experienceWeights[key]) / 2;
        });

        // Boost the speed priority
        if (weights[speed]) {
            weights[speed] *= 1.3;
        }

        // Calculate scores
        const scores = {};
        Object.keys(technologies).forEach(techKey => {
            const tech = technologies[techKey];
            const techScores = tech.scoring[language] || tech.scoring.any;
            
            let totalScore = 0;
            Object.keys(weights).forEach(factor => {
                totalScore += (techScores[factor] || 5) * weights[factor];
            });
            
            scores[techKey] = {
                ...tech,
                score: Math.round(totalScore * 10) / 10,
                rawScores: techScores
            };
        });

        return scores;
    }

    calculateDatabaseScores(technologies) {
        const dataType = this.answers.data_structure || 'structured';
        const scale = this.answers.scale_expectations || 'medium';
        const consistency = this.answers.consistency_needs || 'important';
        const sqlKnowledge = this.answers.team_sql_knowledge || 'basic';

        // Get weights
        const scaleWeights = databaseWeights.scale[scale] || databaseWeights.scale.medium;
        const sqlWeights = databaseWeights.sql_knowledge[sqlKnowledge] || databaseWeights.sql_knowledge.basic;
        
        // Combine weights
        const weights = {};
        Object.keys(scaleWeights).forEach(key => {
            weights[key] = (scaleWeights[key] + sqlWeights[key]) / 2;
        });

        // Boost consistency priority
        if (weights[consistency]) {
            weights[consistency] *= 1.3;
        }

        // Calculate scores
        const scores = {};
        Object.keys(technologies).forEach(techKey => {
            const tech = technologies[techKey];
            const techScores = tech.scoring[dataType] || tech.scoring.structured;
            
            let totalScore = 0;
            Object.keys(weights).forEach(factor => {
                totalScore += (techScores[factor] || 5) * weights[factor];
            });
            
            scores[techKey] = {
                ...tech,
                score: Math.round(totalScore * 10) / 10,
                rawScores: techScores
            };
        });

        return scores;
    }

    calculateCloudScores(technologies) {
        const experience = this.answers.experience_level || 'some';
        const projectType = this.answers.project_type || 'fullstack';
        const budget = this.answers.budget_priority || 'moderate';
        const scaling = this.answers.scaling_needs || 'some';

        // Get weights
        const experienceWeights = cloudWeights.experience[experience] || cloudWeights.experience.some;
        const scalingWeights = cloudWeights.scaling[scaling] || cloudWeights.scaling.some;
        
        // Combine weights
        const weights = {};
        Object.keys(experienceWeights).forEach(key => {
            weights[key] = (experienceWeights[key] + scalingWeights[key]) / 2;
        });

        // Boost budget priority
        if (weights[budget]) {
            weights[budget] *= 1.3;
        }

        // Calculate scores
        const scores = {};
        Object.keys(technologies).forEach(techKey => {
            const tech = technologies[techKey];
            const techScores = tech.scoring[projectType] || tech.scoring.fullstack;
            
            let totalScore = 0;
            Object.keys(weights).forEach(factor => {
                totalScore += (techScores[factor] || 5) * weights[factor];
            });
            
            scores[techKey] = {
                ...tech,
                score: Math.round(totalScore * 10) / 10,
                rawScores: techScores
            };
        });

        return scores;
    }

    showResults() {
        this.hideAllSteps();
        document.getElementById('results').classList.add('active');
        
        const scores = this.calculateScores();
        const sortedTechs = Object.entries(scores)
            .sort(([,a], [,b]) => b.score - a.score);

        const container = document.getElementById('recommendations-container');
        container.innerHTML = '';

        sortedTechs.forEach(([techKey, tech], index) => {
            const isTop = index === 0;
            const recommendation = document.createElement('div');
            recommendation.className = `recommendation ${isTop ? 'top' : ''}`;
            
            const icon = isTop ? '🏆' : '⭐';
            const label = isTop ? 'Top Recommendation' : 'Alternative';
            
            recommendation.innerHTML = `
                <h3>
                    ${icon} ${tech.name}
                    <span class="score">${tech.score}/10</span>
                </h3>
                <p><strong>${label}:</strong> ${tech.description}</p>
                
                <div class="pros">
                    <h4>✅ Why ${tech.name}:</h4>
                    <ul>
                        ${tech.pros.slice(0, 3).map(pro => `<li>${pro}</li>`).join('')}
                    </ul>
                </div>
                
                ${!isTop ? `
                <div class="cons">
                    <h4>❌ Why not ${tech.name}:</h4>
                    <ul>
                        ${this.getWhyNotReasons(tech, sortedTechs[0][1]).map(reason => `<li>${reason}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
            `;
            
            container.appendChild(recommendation);
        });
    }

    getWhyNotReasons(tech, topTech) {
        const reasons = [];
        
        // Compare scores and highlight weaknesses
        if (tech.score < topTech.score - 1) {
            reasons.push(`Lower overall fit for your needs (${tech.score}/10 vs ${topTech.score}/10)`);
        }
        
        // Category-specific reasons
        if (this.currentCategory === 'frontend') {
            return this.getFrontendWhyNotReasons(tech, topTech, reasons);
        } else if (this.currentCategory === 'backend') {
            return this.getBackendWhyNotReasons(tech, topTech, reasons);
        } else if (this.currentCategory === 'database') {
            return this.getDatabaseWhyNotReasons(tech, topTech, reasons);
        } else if (this.currentCategory === 'cloud') {
            return this.getCloudWhyNotReasons(tech, topTech, reasons);
        }
        
        return reasons.slice(0, 3);
    }

    getFrontendWhyNotReasons(tech, topTech, reasons) {
        const priority = this.answers.priority;
        const experience = this.answers.experience;
        
        if (priority === 'jobs' && tech.name !== 'React') {
            reasons.push('Smaller job market compared to React');
        }
        
        if (experience === 'beginner' && tech.name === 'Angular') {
            reasons.push('Steep learning curve for beginners');
        }
        
        if (this.answers.project_type === 'personal' && tech.name === 'Angular') {
            reasons.push('Overkill for personal projects');
        }
        
        reasons.push(...tech.cons.slice(0, 2));
        return reasons.slice(0, 3);
    }

    getBackendWhyNotReasons(tech, topTech, reasons) {
        const language = this.answers.language_preference;
        const complexity = this.answers.project_complexity;
        const experience = this.answers.team_experience;
        
        if (language === 'javascript' && !tech.name.includes('Express')) {
            reasons.push('Different language from your frontend');
        }
        
        if (complexity === 'simple' && tech.name === 'Django') {
            reasons.push('May be overkill for simple APIs');
        }
        
        if (experience === 'beginner' && tech.name === 'Rails') {
            reasons.push('Ruby learning curve on top of backend concepts');
        }
        
        reasons.push(...tech.cons.slice(0, 2));
        return reasons.slice(0, 3);
    }

    getDatabaseWhyNotReasons(tech, topTech, reasons) {
        const sqlKnowledge = this.answers.team_sql_knowledge;
        const dataType = this.answers.data_structure;
        const scale = this.answers.scale_expectations;
        
        if (sqlKnowledge === 'none' && (tech.name.includes('SQL') || tech.name === 'PostgreSQL')) {
            reasons.push('Requires SQL knowledge your team lacks');
        }
        
        if (dataType === 'documents' && tech.name !== 'MongoDB') {
            reasons.push('Less natural for document/JSON storage');
        }
        
        if (scale === 'small' && tech.name === 'MongoDB') {
            reasons.push('May be overkill for small-scale projects');
        }
        
        reasons.push(...tech.cons.slice(0, 2));
        return reasons.slice(0, 3);
    }

    getCloudWhyNotReasons(tech, topTech, reasons) {
        const experience = this.answers.experience_level;
        const budget = this.answers.budget_priority;
        const projectType = this.answers.project_type;
        
        if (experience === 'beginner' && tech.name === 'Amazon Web Services (AWS)') {
            reasons.push('Steep learning curve for cloud beginners');
        }
        
        if (budget === 'free' && tech.name === 'DigitalOcean') {
            reasons.push('No meaningful free tier available');
        }
        
        if (projectType === 'static' && tech.name === 'DigitalOcean') {
            reasons.push('Overkill for static websites');
        }
        
        reasons.push(...tech.cons.slice(0, 2));
        return reasons.slice(0, 3);
    }

    hideAllSteps() {
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
    }

    restart() {
        this.currentCategory = null;
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.showCategorySelection();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TechChoiceWizard();
});